export class SubWId {

    id: number;
    endpoint: string;
    // keys: ArrayBuffer | null;

    // constructor(ep: string, k: ArrayBuffer | null){
    //     this.id = this.getRandID();
    //     this.endpoint = ep;
    //     this.keys = k;
    // }
    

    constructor(ep: string){
        this.id = this.getRandID();
        this.endpoint = ep;
    }

    private getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    
    private getRandID(): number{
    return this.getRandomInt(1, 1000);
    }

}
