// const getEquipment = (req, res, db) => {
//     db.query('SELECT * FROM Equipment', (error, results) => {
//       if (error) {
//         res.status(500).json({ error: 'Failed to fetch data' });
//       } else {
//         res.json(results);
//       }
//     });
//   };
  
//   const addEquipment = (req, res, db) => {
//     const data = req.body;
//     db.query('INSERT INTO Equipment SET ?', data, (error, result) => {
//       if (error) {
//         console.error(error);
//         res.status(500).json('Error inserting data into database');
//       } else {
//         console.log(`Data inserted into database with ID ${result.insertId}`);
//         res.status(200).json('Data inserted into database');
//       }
//     });
//   };
  
//   const editEquipment = (req, res, db) => {
//     const id = req.params.id;
//     const {  EquipName, Amount, Picture, Import_Date, Date } = req.body;
//     console.log(id)
//     db.query(
//       'UPDATE equipment SET EquipName = ?, Amount = ?, Picture = ?, Import_Date = ?, Date = ? WHERE EquipID = ?',[EquipName, Amount, Picture, Import_Date, Date, id],
//       (error, results) => {
//         if (error) {
//           console.log('Error updating equipment:', error);
//           res.status(500).send('Error updating equipment');
//         } else {
//           res.send(results);
//         }
//       }
//     );
//   };
  
//   const deleteEquipment = (req, res, db) => {
//     const id = req.params.id;
//     db.query('DELETE FROM Equipment WHERE EquipID = ?', [id], (error, results) => {
//       if (error) {
//         console.log('Error deleting equipment:', error);
//         res.status(500).json('Error deleting equipment');
//       } else {
//         res.status(200).json('Delete Success');
//       }
//     });
//   };
  
//   module.exports = {
//     getEquipment,
//     addEquipment,
//     editEquipment,
//     deleteEquipment,
//   };
  


const getEquipment = (req, res, db) => {
  db.query('SELECT * FROM Equipment', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    } else {
      res.json(results);
    }
  });
};

const addEquipment = (req, res, db) => {
  const data = req.body;
  db.query('INSERT INTO Equipment SET ?', data, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json('Error inserting data into database');
    } else {
      console.log(`Data inserted into database with ID ${result.insertId}`);
      res.status(200).json('Data inserted into database');
    }
  });
};

const editEquipment = (req, res, db) => {
  const id = req.params.id;
  const {  EquipName, Amount, Picture, Import_Date, Date } = req.body;
  console.log(id)
  db.query(
    'UPDATE equipment SET EquipName = ?, Amount = ?, Picture = ?, Import_Date = ?, Date = ? WHERE EquipID = ?',[EquipName, Amount, Picture, Import_Date, Date, id],
    (error, results) => {
      if (error) {
        console.log('Error updating equipment:', error);
        res.status(500).send('Error updating equipment');
      } else {
        res.send(results);
      }
    }
  );
};

const deleteEquipment = (req, res, db) => {
  const id = req.params.id;
  db.query('DELETE FROM Equipment WHERE EquipID = ?', [id], (error, results) => {
    if (error) {
      console.log('Error deleting equipment:', error);
      res.status(500).json('Error deleting equipment');
    } else {
      res.status(200).json('Delete Success');
    }
  });
};

const borrowEquipment = (req, res, db) => {
  const { EquipID, BorrowerID, BorrowDate, ReturnDate } = req.body;

  // ทำการตรวจสอบความถูกต้องของข้อมูลที่ส่งมา
  if (!EquipID || !BorrowerID || !BorrowDate || !ReturnDate) {
    return res.status(400).json({ error: 'กรุณาระบุข้อมูลที่จำเป็นให้ครบถ้วน' });
  }

  const borrowData = {
    EquipID,
    BorrowerID,
    BorrowDate,
    ReturnDate,
  };

  db.query('INSERT INTO borrow SET ?', borrowData, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'เกิดข้อผิดพลาดในการยืมอุปกรณ์' });
    } else {
      console.log(`บันทึกข้อมูลการยืมอุปกรณ์เรียบร้อยแล้ว`);
      res.status(200).json('บันทึกข้อมูลการยืมอุปกรณ์เรียบร้อยแล้ว');
    }
  });
};

module.exports = {
  getEquipment,
  addEquipment,
  editEquipment,
  deleteEquipment,
  borrowEquipment, // เพิ่มฟังก์ชันการยืมอุปกรณ์ในการส่งออก
};
