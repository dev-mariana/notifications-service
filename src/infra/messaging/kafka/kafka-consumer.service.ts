import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['settling-sturgeon-8283-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'c2V0dGxpbmctc3R1cmdlb24tODI4MyQvf5U9UsxUdgHWGwEQfKN8IijIeBuLoDk',
          password:
            'TgyIwfaDAu8J9SwpWjtAsInnUCsrgY_zPduA103Hwn6ay7FBHFjQ5YD_T1wNv7lzkxQQwg==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
