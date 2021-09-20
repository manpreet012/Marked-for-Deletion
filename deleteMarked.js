const fs = require("fs"); 

  fs.readFile("marked.csv",{encoding:"utf-8"},(err,data)=>{
      let rows = data.split("\n");
      //console.log(rows);

      rows = rows.map((row) => row.split(","));
      rows = rows.filter((row) => row[2] === "yes");
      
      rows = rows.map((row) => row.join(","));
      rows = rows.join("\n");

      fs.writeFile("deleted.csv", rows, (err) => {
          if (err) console.error(err)
      });
      console.log(rows);

  });