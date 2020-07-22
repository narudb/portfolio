const { connection } = require('../conf');
const express = require('express');

const getAllProjects = async (req, res) => {
  try {
    let sqlRequest = `SELECT project.id AS project_id, project_title, SUBSTR(project_description, 1, 100),  project_img, client_name, technologie_name, picture_location FROM project JOIN client ON client.id=project.client_id JOIN technologie ON technologie.id=technologie_id JOIN picture ON project_id = project.id`;

    const [data] = await connection.query(sqlRequest, [req.body]);
    return res.status(200).send(data);
  } catch (e) {
    console.log(e);

    return res.status(500).send('Error while reading the projects.');
  }
};

const getOneProject = async (req, res) => {
  const { id } = req.params;
  try {
    // get one Project
    const [
      data,
    ] = await connection.query(
      'SELECT project.id AS project_id, project_title, DATE_FORMAT(project_date, " %W, %d %M %Y" ) AS projectDate, project_update, client_name, project_link, picture_location, technologie_name FROM project JOIN client ON client.id=project.client_id JOIN technologie ON technologie.id=technologie_id JOIN picture ON project_id = project.id WHERE project.id = ?',
      [id]
    );

    return res.status(200).send(data[0]);
  } catch (e) {
    console.log(e);
    return res.status(500).send('Error while reading the projects.');
  }
};

const postProject = async (req, res) => {
  const formdata = req.body;
  //post one news
  try {
    await connection.query('INSERT INTO project SET ?', formdata);

    const news = {
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
      creationDate: req.body.creation_date,
      pictureUrl: req.body.picture_url,
    };
    return res.status(200).send({ news });
  } catch (e) {
    console.log(e);
    return res.status(500).send('Error while reading the news.');
  }
};

module.exports = { getAllProjects, getOneProject, postProject };
