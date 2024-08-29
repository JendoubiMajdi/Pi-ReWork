import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SmsService {
  private readonly apiKey = '2e44b87b270621db8945a4724907f13a-5a4e7a17-8fe1-4013-80c0-2b6c28a9eb5f';
  private readonly apiUrl = 'https://e1v6pq.api.infobip.com/sms/2/text/advanced';

  async sendSMS(to: string, message: string) {
    try {
      const response = await axios.post(
        this.apiUrl,
        {
          messages: [
            {
              from: '447491163443', 
              destinations: [{ to: to }],
              text: message,
            },
          ],
        },
        
        {
          headers: {
            Authorization: `App ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        },
      );

      const responseData = response.data;
      const status = responseData.messages[0].status;
      console.log('SMS Status:', status);


      console.log('SMS sent successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Failed to send SMS:', error.response ? error.response.data : error.message);
      throw new Error(`Failed to send SMS: ${JSON.stringify(error.response ? error.response.data : error.message)}`);
    }
  }
}
