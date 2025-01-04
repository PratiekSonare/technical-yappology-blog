import LangflowClient from '../../app/LangflowClient';

const flowId = '79a5a2d1-51a4-475c-81bd-91df81a82366';
const langflowId = '69313a1b-b1b9-4b4e-b4b7-2199eaf9b217';
const applicationToken = 'AstraCS:StzJXpLZbojHZcNZwRjZikJc:1173040489567396f985dbd39e8eae3876f72a065ec8d964cd90ccc38696af99';
const client = new LangflowClient('https://api.langflow.astra.datastax.com', applicationToken);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { inputValue, stream = false } = req.body;

    try {
      const response = await client.runFlow(
        flowId,
        langflowId,
        inputValue,
        'chat', // inputType
        'chat', // outputType
        {}, // tweaks
        stream,
        (data) => console.log('Streaming data:', data.chunk), // onUpdate
        (message) => console.log('Stream closed:', message), // onClose
        (error) => console.error('Stream error:', error) // onErro
      );

      if (!stream) {
        const output = response.outputs[0].outputs[0].outputs.message;
        res.status(200).json({ message: output.message.text });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
