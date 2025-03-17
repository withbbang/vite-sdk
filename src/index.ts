import { add, subtract } from './operations';

class Operations {
  private static instance: Operations;

  private constructor() {
    console.log(
      '██╗   ██╗██╗████████╗███████╗    ███████╗██████╗ ██╗  ██╗\n' +
        '██║   ██║██║╚══██╔══╝██╔════╝    ██╔════╝██╔══██╗██║ ██╔╝\n' +
        '██║   ██║██║   ██║   █████╗      ███████╗██║  ██║█████╔╝ \n' +
        '╚██╗ ██╔╝██║   ██║   ██╔══╝      ╚════██║██║  ██║██╔═██╗ \n' +
        ' ╚████╔╝ ██║   ██║   ███████╗    ███████║██████╔╝██║  ██╗\n' +
        '  ╚═══╝  ╚═╝   ╚═╝   ╚══════╝    ╚══════╝╚═════╝ ╚═╝  ╚═╝',
    );
  }

  public static getInstance(): Operations {
    if (!Operations.instance) {
      Operations.instance = new Operations();
    }

    return Operations.instance;
  }

  public add(a: number, b: number): number {
    return add(a, b);
  }

  public subtract(a: number, b: number): number {
    return subtract(a, b);
  }
}

export const OperationsSingleton = Operations.getInstance();
