const fetch = require('node-fetch');

module.exports = function (app) {
  app.get('/stalk/supersus', async (req, res) => {
    try {
      const { apikey, id } = req.query;
      if (!id) return res.status(400).json({ error: 'Parameter "id" wajib diisi' });
      const check = global.apikey
      if (!global.apikey.includes(apikey)) return res.json("Apikey tidak valid.")
      
      const url = `https://api.vocagame.com/v1/order/prepare/SUPER_SUS?userId=${id}&zoneId=undefined`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.message === 'Success') {
        res.json({ status: true, id, nickname: data.data });
      } else {
        res.status(404).json({ error: 'Username tidak ditemukan' });
      }
    } catch (error) {
      res.status(500).send(`Error: ${error.message}`);
    }
  });

  app.get('/stalk/hok', async (req, res) => {
    try {
      const { apikey, id } = req.query;
      if (!id) return res.status(400).json({ error: 'Parameter "id" wajib diisi' });
      const check = global.apikey
      if (!global.apikey.includes(apikey)) return res.json("Apikey tidak valid.")

      const url = `https://api.vocagame.com/v1/order/prepare/HOK?userId=${id}&zoneId=undefined`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.message === 'Success') {
        res.json({ status: true, id, nickname: data.data });
      } else {
        res.status(404).json({ error: 'Username tidak ditemukan' });
      }
    } catch (error) {
      res.status(500).send(`Error: ${error.message}`);
    }
  });

  app.get('/stalk/pubg', async (req, res) => {
    try {
      const { apikey, id } = req.query;
      if (!id) return res.status(400).json({ error: 'Parameter "id" wajib diisi' });
      const check = global.apikey
      if (!global.apikey.includes(apikey)) return res.json("Apikey tidak valid.")

      
      const url = `https://api.vocagame.com/v1/order/prepare/PUBGM?userId=${id}&zoneId=undefined`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.message === 'Success') {
        res.json({ status: true, id, nickname: data.data });
      } else {
        res.status(404).json({ error: 'Username tidak ditemukan' });
      }
    } catch (error) {
      res.status(500).send(`Error: ${error.message}`);
    }
  });
};
