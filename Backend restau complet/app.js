const express = require('express');
const app = express();
const cors = require('cors');

const articleRouter = require("./routes/articles.route")
const societeRouter = require("./routes/societes.route")
const categorieRouter = require("./routes/categories.route")
const commandeRouter = require("./routes/commandes.route")
const employeRouter = require("./routes/employes.route")
const adminRouter = require("./routes/admins.route")

app.use(express.json());
app.use(cors());
//const db = require("./models");
//db.sequelize.sync();
  // api routes
app.use('/api/articles', articleRouter);
app.use('/api/societe', societeRouter);
app.use('/api/societes', societeRouter);
app.use('/api/categorie', categorieRouter);
app.use('/api/categories', categorieRouter);
app.use('/api/commande', commandeRouter);
app.use('/api/employe', employeRouter);
app.use('/api/admin', adminRouter);
app.use('/api/updateCommande', commandeRouter);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3030;
app.listen(port, () => console.log('Server listening on port ' + port));
