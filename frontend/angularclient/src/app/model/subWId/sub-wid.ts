export class SubWId {

    id: number;
    endpoint: string;
    auth: string | null;

    constructor(ep: string, k: string | null){
        this.id = this.getRandID();
        this.endpoint = ep;
        this.auth = k;
    }
    

    private getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    
    private getRandID(): number{
    return this.getRandomInt(1, 1000);
    }

}
