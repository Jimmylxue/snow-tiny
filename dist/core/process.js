"use strict";var e=require("fs"),t=require("path"),n=require("https"),r=require("url");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a,i=o(e),u=o(n),s=o(r);function c(e=0,t=10){return Math.floor(Math.random()*(t-e+1)+e)}!function(e){e[e.B=0]="B",e[e.KB=1]="KB",e[e.MB=2]="MB",e[e.GB=3]="GB",e[e.TB=4]="TB",e[e.PB=5]="PB",e[e.EB=6]="EB",e[e.ZB=7]="ZB",e[e.YB=8]="YB"}(a||(a={}));const l=Buffer.from("tiny","binary");function f(e){const t={headers:{"Cache-Control":"no-cache","Content-Type":"application/x-www-form-urlencoded","Postman-Token":Date.now(),"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36","X-Forwarded-For":new Array(4).fill(0).map((()=>parseInt(String(255*Math.random()),10))).join(".")},hostname:["tinyjpg.com","tinypng.com"][c(0,1)],method:"POST",path:"/backend/opt/shrink",rejectUnauthorized:!1};return new Promise(((n,r)=>{const o=u.default.request(t,(e=>{e.on("data",(e=>{try{const t=JSON.parse(e.toString());t.error?r(t):n(t)}catch(e){r(e)}}))}));o.write(e),o.on("error",(e=>r(e))),o.end()}))}process.on("message",(({tasks:e,snowTinyConfig:n})=>{(async()=>{const r=e.map((e=>function({fullRoute:e,outputRoute:t,fileName:n}){return async()=>{const r={input:0,output:0,ratio:0,msg:"",time:0,file:i.default.readFileSync(e),path:t,fileName:n};try{const e=+new Date,t=await f(r.file),n=await function(e){const t=new s.default.URL(e);return new Promise(((e,n)=>{const r=u.default.request(t,(t=>{let n="";t.setEncoding("binary"),t.on("data",(e=>n+=e)),t.on("end",(()=>e(n)))}));r.on("error",(e=>n(e))),r.end()}))}(t.output.url);r.input=t.input.size,r.output=t.output.size,r.ratio=1-t.output.ratio,r.file=Buffer.alloc(n.length,n,"binary"),r.time=+new Date-e}catch(e){r.msg=`错误：${JSON.stringify(e||{})}`}return r}}(e))),o=await Promise.all([...r.map((e=>e()))]);await Promise.all(o.map((({path:e,file:r,fileName:o})=>{new Promise(((a,u)=>{n?.tile?i.default.writeFile(t.resolve(process.cwd(),n.output,o),Buffer.concat([r,l]),(e=>{e&&u(e),a(!0)})):i.default.writeFile(e,Buffer.concat([r,l]),(e=>{e&&u(e),a(!0)}))}))}))),process.send&&process.send(o)})()}));