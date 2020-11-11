import { Controller, Get } from "@nestjs/common";
import { HealtCheckService } from "./healtcheck.service";

@Controller('healtcheck')
export class HealtcheckController{
    
    constructor(private _healcheckService:HealtCheckService){}

    @Get()
    public index(){
        return this._healcheckService.getMessage()
    }
}