export class SubWId {

    id: number;
    subscription: string;

    constructor(sub: PushSubscription){
        this.id = this.getRandID();
        this.subscription = JSON.stringify(sub);
    }
    

    private getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    
    private getRandID(): number{
    return this.getRandomInt(1, 1000);
    }

}
