// pages/api/chat.js
import fetch from 'node-fetch';

class LangflowClient {
    constructor(baseURL, applicationToken) {
        this.baseURL = baseURL;
        this.applicationToken = applicationToken;
    }
    async post(endpoint, body, headers) {
        headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.applicationToken}`
        };
        const url = `${this.baseURL}${endpoint}`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            });

            const responseMessage = await response.json();
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText} - ${JSON.stringify(responseMessage)}`);
            }
            return responseMessage;
        } catch (error) {
            console.error('Request Error:', error.message);
            throw error;
        }
    }

    async initiateSession(flowId, langflowId, inputValue, inputType = 'chat', outputType = 'chat', stream = false, tweaks = {}) {
        const endpoint = `/lf/${langflowId}/api/v1/run/${flowId}?stream=${stream}`;
        return this.post(endpoint, { input_value: inputValue, input_type: inputType, output_type: outputType, tweaks: tweaks });
    }

    handleStream(streamUrl, onUpdate, onClose, onError) {
        const eventSource = new EventSource(streamUrl);

        eventSource.onmessage = event => {
            const data = JSON.parse(event.data);
            onUpdate(data);
        };

        eventSource.onerror = event => {
            console.error('Stream Error:', event);
            onError(event);
            eventSource.close();
        };

        eventSource.addEventListener("close", () => {
            onClose('Stream closed');
            eventSource.close();
        });

        return eventSource;
    }

    async runFlow(flowIdOrName, langflowId, inputValue, inputType = 'chat', outputType = 'chat', tweaks = {}, stream = false, onUpdate, onClose, onError) {
        try {
            const initResponse = await this.initiateSession(flowIdOrName, langflowId, inputValue, inputType, outputType, stream, tweaks);
            console.log('Init Response:', initResponse);
            if (stream && initResponse && initResponse.outputs && initResponse.outputs[0].outputs[0].artifacts.stream_url) {
                const streamUrl = initResponse.outputs[0].outputs[0].artifacts.stream_url;
                console.log(`Streaming from: ${streamUrl}`);
                this.handleStream(streamUrl, onUpdate, onClose, onError);
            }
            return initResponse;
        } catch (error) {
            console.error('Error running flow:', error);
            onError('Error initiating session');
        }
    }
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { inputValue, inputType = 'chat', outputType = 'chat', stream = false } = req.body;

        const flowIdOrName = '79a5a2d1-51a4-475c-81bd-91df81a82366';
        const langflowId = '69313a1b-b1b9-4b4e-b4b7-2199eaf9b217';
        const applicationToken = 'AstraCS:StzJXpLZbojHZcNZwRjZikJc:1173040489567396f985dbd39e8eae3876f72a065ec8d964cd90ccc38696af99';

        if (!flowIdOrName || !langflowId || !applicationToken) {
            console.error('Missing configuration');
            return res.status(500).json({ error: 'Server misconfiguration. Contact admin.' });
        }

        const langflowClient = new LangflowClient('https://api.langflow.astra.datastax.com', applicationToken);

        try {

            const tweaks = {
                "ChatInput-kd5LJ": {},
                "ChatOutput-Cs5jk": {},
                "Prompt-Qn9CW": {},
                "Agent-UeA8R": {},
                "AstraDB-FxgKv": {},
                "ParseData-HeDd5": {},
                "File-Ft8kh": {},
                "SplitText-fUASN": {},
                "AstraDB-3e1AA": {}
            }

            const response = await langflowClient.runFlow(
                flowIdOrName,
                langflowId,
                inputValue,
                inputType,
                outputType,
                tweaks,
                stream,
                (data) => console.log("Received:", data.chunk),
                (message) => console.log("Stream Closed:", message),
                (error) => console.error("Stream Error:", error)
            );

            if (!stream && response?.outputs) {
                const output = response.outputs[0]?.outputs[0]?.outputs?.message?.message?.text || 'No response available';
                return res.status(200).json({ message: output });
            }

            return res.status(200).json(response);
        } catch (error) {
            console.error('Main Error:', error);
            return res.status(500).json({ error: 'An unexpected error occurred.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
