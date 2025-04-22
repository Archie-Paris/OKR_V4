const fs = require('fs');

const getDataFromDb = () =>{
    const data = fs.readFileSync('db/db.json');
    return JSON.parse(data);
};

const saveDataToDb = (data) => {
    fs.writeFileSync('db/db.json', JSON.stringify(data, null, 2));
  };
  

  const getAllData = (req, res) =>{
const data = getDataFromDb();
res.json(data);
  };


    const getInData = (req, res) =>{

    const { id } = req.params;
    const data = getDataFromDb();
    const item = data.find((el) => el.id === id);

      res.json(item);
    };

    const createauto = (req, res) =>{
        const newItem = req.body;
        const data = getDataFromDb();

        data.push(newItem);
        saveDataDb(data);
        res.json(newItem);
    };
    
    const updateId = (req, res) =>{
        const {id} = req.params;
        const updateIdItem = req.body;
        const data = getDataFromDb();
        const inndex = data.findIndex( (el) => el.id === id);
        data[inndex] = {...data[inndex] , ...updateIdtem};
        saveDataToDb(data);
        res.json(data[inndex]);
    

    };

    const deleteAuto = (req, res) =>{
        const {id} = req.body;
        const data = getDataFromDb();
        const inndex = data.findIndex( (el) => el.id === id);
        data.splice (inndex,1);
        saveDataToDb(data);
    };

    module.exports = {
        getAllData ,
        getInData,
        createauto,
        updateId,
        deleteAuto,
    };