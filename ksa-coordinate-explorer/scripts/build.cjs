const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
let html=read('src/index.template.html');
for(const [token,file]of [['@@OSM@@','data/offline-map.json'],['@@DATA@@','data/coordinates.json'],['@@JS@@','src/explorer.js']]){
 const value=read(file);if(file.endsWith('.json'))JSON.parse(value);
 if(!html.includes(token))throw Error('Missing template token '+token);
 html=html.replace(token,()=>value);
}
const target=path.join(root,'index.html');
if(process.argv.includes('--check')){
 if(read('index.html')!==html)throw Error('index.html differs from source. Run npm run build.');
 console.log('PASS: committed HTML matches source and embedded JSON parses.');
}else{fs.writeFileSync(target,html);console.log('Built standalone index.html.');}
