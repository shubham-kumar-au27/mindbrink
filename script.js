//for getting all Data---
let allData = document.getElementById('allData');

// allData.append(getAllData())
let totalData = 0
//fetch function -------- 
fetch('http://localhost:3000/Data').then(res =>res.json()).then(json => {
    json.forEach(data => {
        if (data){
            totalData += 1
        }
        
    });
    
    allData.append(getAllData(totalData))
});
//create all data-----
function getAllData(totalData){
    let dataEle = document.createElement('p');
    let datatext = document.createTextNode(`${totalData}`)
    dataEle.appendChild(datatext)
    return dataEle
};

//for male female sample-----
let genderData = document.getElementById('gender');

let male = 0;
let female = 0; 


function filtermaleFemale(male,female){
    let genderEle = document.createElement('p');
    let gendertext = document.createTextNode(`female: ${female}`)
    let maleEle = document.createElement('p')
    let maletxt = document.createTextNode(`Male : ${male}`)
    maleEle.appendChild(maletxt);
    genderEle.appendChild(gendertext);
    genderData.append(maleEle)
    return genderEle
}
fetch('http://localhost:3000/Data').then(res => res.json()).then(json =>{
    json.forEach(data =>{
        if (data.Gender == 'Male'){
            male += 1
        }else{
            female += 1
        }
    })
    genderData.append(filtermaleFemale(male,female));
});
    // -------------------------------------

//filter Function-------
let select = document.getElementById('searchBar').value;


function getFilteredData(){
    let XYZ = 0; let JBC = 0; let NVS = 0;let NCS = 0; let KLM = 0;let NSP = 0;
    let MyData = fetch('http://localhost:3000/Data').then(res => res.json())
    
    MyData.then(val =>{
        val.forEach(data =>{
            if (data.Constituency == select){
                if (data.Party == "XYZ"){
                XYZ += 1}
                else if (data.Party == "JBC"){
                    JBC += 1
                } else if (data.Party == "NVS"){
                        NVS += 1
                } else if (data.Party == "NCS"){
                    NCS += 1
                } else if (data.Party == "KLM"){
                    KLM += 1
                }else if (data.Party == "NSP"){
                    NSP += 1
                }   
            }
        })
        let partyContainer = document.getElementById('filterParty');
        let xyzEle = document.createElement('p');
        let xyztext = document.createTextNode(`XYZ: ${XYZ}`)
        xyzEle.appendChild(xyztext)
        // ----------------------------
        let jbcEle = document.createElement('p');
        let jbctext = document.createTextNode(`JBC : ${JBC}`) 
        jbcEle.appendChild(jbctext)
        let nvsEle = document.createElement('p');
        let nvsText = document.createTextNode(`NVS ${NVS}`)
        nvsEle.appendChild(nvsText)
        let ncsEle = document.createElement('p');
        let ncsText = document.createTextNode(`NCS : ${NCS}`)
        ncsEle.appendChild(ncsText)
        let klmEle = document.createElement('p');
        let klmText = document.createTextNode(`KLM: ${KLM}`)
        klmEle.appendChild(klmText)
        let nspEle = document.createElement('p');
        let nsptext = document.createTextNode(`NSP : ${NSP}`) 
        nspEle.appendChild(nsptext)

    let arrParty = [xyzEle,jbcEle,nvsEle,ncsEle,klmEle,nspEle]

    for (let i = 0; i < arrParty.length; i++){
        partyContainer.append(arrParty[i])
    }
    //for party chart
    const partylabel = ['XYZ','JBC','NVS','NCS','KLM','NSP']
    const partyvalue = [XYZ,JBC,NVS,NCS,KLM,NSP];

    // const partyData = partylabel.map((label,index) =>{
    //     let labelObj = {};
    //     labelObj.label = label;
    //     labelObj.value = {};
    //     labelObj.value.partyvalue = partyvalue[index]
    //     return labelObj
    // });
    // console.log(partyData)
    const data = {
        labels: partylabel,
        datasets: [{
          label: 'My First Dataset',
          data: partyvalue,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
  const config = {
    type: 'pie',
    data,
    options: {}
  };
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );



    })

    // return partyContainer

//Age Group ---------
let Group18_30 =0; let Group30_45 = 0;let Group45_60 = 0; let Group60 = 0


    let ageData = fetch('http://localhost:3000/Data').then(res => res.json())

    ageData.then(val =>{
        val.forEach(data =>{
            if (data.Constituency == select){
                if (data.AgeGroup == "18-30"){
                    Group18_30 += 1
                }else if (data.AgeGroup == "30-45"){
                    Group30_45 += 1
                }else if (data.AgeGroup == "45-60"){
                    Group45_60 += 1
                }else if (data.AgeGroup == "60+"){
                    Group60 += 1
                }
            }
        })
        let ageGroupele = document.getElementById('ageGroup');

        let Group18_30ele = document.createElement('p')
        let Group18_30txt = document.createTextNode(`18-30 >> ${Group18_30}`);
        Group18_30ele.appendChild(Group18_30txt);
        let Group30_45ele = document.createElement('p');
        let Group30_45txt = document.createTextNode(`30-45 >> ${Group30_45}`);
        Group30_45ele.appendChild(Group30_45txt);
        let Group45_60ele = document.createElement('p')
        let Group45_60eletxt = document.createTextNode(`40-60 >> ${Group45_60}`);
        Group45_60ele.appendChild(Group45_60eletxt)
        let Group60ele = document.createElement('li');
        let Group60txt = document.createTextNode(`60>${Group60}`);
        Group60ele.appendChild(Group60txt);

        let ageGrouparr = [Group18_30ele,Group30_45ele,Group45_60ele,Group60]

        for (let i =0 ; i < ageGrouparr.length; i++){
            ageGroupele.append(ageGrouparr[i])
        }
    })
}
