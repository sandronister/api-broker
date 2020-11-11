import { Injectable } from "@nestjs/common";

@Injectable()
export class HealtCheckService{

    public getMessage():string{
        return 'That is OK'
    }
}