import { Contorller } from "../interfaces/Contorller";
import {Request, Response} from "express";
import { logger } from "../middlewares/log";
import { idToObj } from "../interfaces/id2obj";

// const path = '/home/ethci/projects/R3f-editor-back/ETHCI-r3f-editor/dist/index.html'
const path = 'D:/projects/R3f-editor-back/tools/ctf/index.html'


export class PageController extends Contorller {

  public test(Request:Request, Response:Response) {
    Response.send(Request.headers.jti)
  }
  public sendPage(Request:Request, Response:Response){
    Response.sendFile(path,(err=>{
      logger.error(`${Request.ip} used sendPage(): ${err}`)
    }))
  }

  public flag(Request:Request, Response:Response){
    const res = result[Request.query.flag as string]?result[Request.query.flag as string]:false
    Response.send(`"${res}"`)
  }
}

const result:idToObj<string> = {
  "3wXgkzSx":"flag",
  "Bgjx0ftD":"hide",
  "dMibaSQC":"find",
  "IUvM4y8Z":"unzip",
  "PuqdRTSq":"access",
  "WcnwsbmZ":"python",
  "y00YQSnR":"nginx",
  // "3wXgkzSx":"3wXgkzSx",
  // "3wXgkzSx":"3wXgkzSx",
  // "3wXgkzSx":"3wXgkzSx",
  // "3wXgkzSx":"3wXgkzSx",
  // "3wXgkzSx":"3wXgkzSx",
  // "3wXgkzSx":"3wXgkzSx",
  // "3wXgkzSx":"3wXgkzSx",
}