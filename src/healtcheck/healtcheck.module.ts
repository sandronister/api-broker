import { Module } from "@nestjs/common";
import { HealtcheckController } from "./healtcheck.controller";
import { HealtCheckService } from "./healtcheck.service";

@Module({
    imports:[],
    controllers:[HealtcheckController],
    providers:[HealtCheckService],
    exports:[HealtCheckService]
})
export class heatcheckModule{}