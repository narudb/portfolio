const { connection } = require('../conf');
const express = require('express');

const getAllProjects = async (req, res) => {
  try {
    let sqlRequest = `SELECT project.id AS project_id, project_title, SUBSTR(project_description, 1, 100) AS projectDescription, project_link, project_date, project_img, client_name, technologie_name FROM project JOIN client ON client.id=project.client_id JOIN technologie ON technologie.id=technologie_id`;

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
    // get one project
    const [
      data,
    ] = await connection.query(
      'SELECT project.id AS project_id, project_title, SUBSTR(project_description, 1, 100) AS projectDescription, DATE_FORMAT(project_date, " %W, %d %M %Y" ) AS projectDate, project_update, client_name, project_link, picture_one, picture_two, picture_three, picture_four, technologie_name FROM project JOIN client ON client.id=project.client_id JOIN technologie ON technologie.id=technologie_id JOIN picture ON project_id = project.id WHERE project.id = ?',
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
  //post one project
  try {
    await connection.query('INSERT INTO project SET ?', formdata);

    const project = {
      project_title: req.body.project_title,
      project_description: req.body.project_description,
      project_link: req.body.project_link,
      project_date: req.body.project_date,
      project_img: req.body.project_img,
      client_id: req.body.client_id,
      technologie_id: req.body.technologie_id,
    };
    return res.status(200).send({ project });
  } catch (e) {
    console.log(e);
    return res.status(500).send('Error while reading the projects.');
  }
};

module.exports = { getAllProjects, getOneProject, postProject };
