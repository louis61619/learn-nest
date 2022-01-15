import { Injectable } from '@nestjs/common'

@Injectable()
export class HelloService {
  fetch(id, name: string, role: string): string {
    return `Hello World! ${id} - ${name} - ${role}`
  }

  save(message): string {
    return `Set Hello Done.${message}`
  }

  update(id: string, message: string): string {
    return `Update Hello Done. ${id}：${message}`
  }

  remove(id: number): string {
    return `${id} Record Was Removed.`
  }
}
