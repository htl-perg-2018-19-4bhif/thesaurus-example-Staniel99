if (process.argv.length <= 2) {
    console.error("Please specify words");
}
else {
    var found_1 = false;
    var founded_1 = [];
    for (var i = 0; i < process.argv.length; i++) {
        founded_1[i] = false;
    }
    var lineReader = require("readline").createInterface({
        input: require("fs").createReadStream("openthesaurus.txt")
    });
    console.log("Matches:");
    lineReader.on("line", function (line) {
        var currline = line.split(";");
        for (var i = 2; i < process.argv.length; i++) {
            for (var j = 0; j < currline.length; j++) {
                var currString = currline[j];
                if (process.argv[i] == currString || currString.indexOf(process.argv[i]) != -1) {
                    if (founded_1[i] == false) {
                        console.log(process.argv[i] + ":");
                        founded_1[i] = true;
                    }
                    console.log("\t" + currString);
                    found_1 = true;
                }
            }
        }
    });
    lineReader.on("close", function (line) {
        if (found_1 == false) {
            console.log("No matches found!");
        }
    });
}
