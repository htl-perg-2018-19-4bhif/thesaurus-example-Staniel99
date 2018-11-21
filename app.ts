if(process.argv.length<=2){
    console.error("Please specify words");
}else{
    let found:Boolean=false;
    let founded:Boolean[]=[];

    for(let i=0; i<process.argv.length; i++){
        founded[i]=false;
    }

    let lineReader = require("readline").createInterface({
        input: require("fs").createReadStream("openthesaurus.txt")    
    });

    console.log("Matches:");
    lineReader.on("line", function (line) {
        let currline: string[] = line.split(";")
        for (let i=2; i<process.argv.length; i++) {
            for (let j=0; j<currline.length; j++) {
                let currString: string = currline[j];
                if (process.argv[i]==currString || currString.indexOf(process.argv[i])!=-1){
                    if(founded[i]==false){
                        console.log(process.argv[i]+":");
                        founded[i]=true;
                    }
                    console.log("\t"+currString);
                    found=true;
                }
            }
        }
    });

    lineReader.on("close", function (line){
        if (found==false){
            console.log("No matches found!");
        }
    });
}