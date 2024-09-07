const submitBtn = document.getElementById("submitBtn");
const userName = document.getElementById("name");
const userClasss = document.getElementById("classs");
const userRoll = document.getElementById("roll");
const userAdmno = document.getElementById("admno");


const generatePDF = async (name,classs,roll,admno) => {
  const { PDFDocument, rgb } = PDFLib;

  const capitalize = (str, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
      match.toUpperCase()
    );




  const exBytes = await fetch("./cert.pdf").then((res) => {
    return res.arrayBuffer();
  });
  const exFont = await fetch("./Poppins-Regular.ttf").then((res) => {
    return res.arrayBuffer();
  });
  const pdfDoc = await PDFDocument.load(exBytes);
  pdfDoc.registerFontkit(fontkit); const myFont = await pdfDoc.embedFont(exFont); const pages = pdfDoc.getPages(); const firstPg = pages[0];
  firstPg.drawText(name, {
        x: 67,
        y: 242,
        size: 17,
        font: myFont,
        color: rgb(0.05, 0.05, 0.05),
  });
  firstPg.drawText(classs, {
        x: 67,
        y: 170,
        size: 17,
        font: myFont,
        color: rgb(0.05, 0.05, 0.05),
  });
  firstPg.drawText(roll, {
        x: 67,
        y: 100,
        size: 17,
        font: myFont,
        color: rgb(0.05, 0.05, 0.05),
  });
  firstPg.drawText(admno, {
        x: 67,
        y: 25,
        size: 17,
        font: myFont,
        color: rgb(0.05, 0.05, 0.05),
  });

  const uri = await pdfDoc.saveAsBase64({ dataUri: true });
  saveAs(uri,'Front-page.pdf',{autoBom:true});

  // document.querySelector("#mypdf").src = uri;
};
const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );
submitBtn.addEventListener('click',()=>{
  // const val = capitalize(userName.value);
  
  const valName = capitalize(userName.value);
  const valClass = capitalize(userClasss.value);
  const valRoll = userRoll.value;
  const valAdmno = userAdmno.value;
  
  //check if the text is empty or not
  if (valName.trim() !== "" && userName.checkValidity()) {
    // console.log(val);
    generatePDF(valName,valClass,valRoll,valAdmno);
  } 
  else if(valClass.trim() !== "" && userClasss.checkValidity()){
    
    generatePDF(valName,valClass,valRoll,valAdmno);
  }
  else if(valRoll.trim() !== "" && userRoll.checkValidity()){
    
    generatePDF(valName,valClass,valRoll,valAdmno);
  }
  else if(valAdmno.trim() !== "" && userAdmno.checkValidity()){
    
    generatePDF(valName,valClass,valRoll,valAdmno);
  }
  
  else {
    userName.reportValidity();
  }
  var file = new File(
    [pdfBytes],
    "Front-page.pdf",
    {
      type: "application/pdf;charset=utf-8",
    }
  );
 saveAs(file);
})
