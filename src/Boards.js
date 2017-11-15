import React, { Component } from 'react';
import './Boards.css';
import { connect } from "redux-zero/react";
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { addTask, inputPass, inputPassConfirm, comparePassword } from "./actions";

const Header = () => {
    return (
        <div className="cabecera">
            <div className="mensaje">
                <img className="logoCabecera" />
            </div>
        </div>
    );
}

const Body = ({ addTask }) => {
    
    return (
        <div className="contenedor" id="contenedorGeneral">
            <div id="cajitas" className="d-inlineblock">
                <button id="btnAddList" onClick={(e) => { addTask(e) }}>Add List ...</button>
            </div>

        </div>
    );
}
const TaskAdd = ({ task, title }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        addTask(this.nameInputRef.value);
    }
    return (
        <div className="taskContainer2">
            <form onSubmit={onSubmit}>
                <input placeholder="Add a new list ..." value={title} ref={(e) => this.nameInputRef = e} />
                <button className="btn btn-circle text-uppercase" id="btnSave">Save</button>
                {/* <p className="text--center">or<a>Cancel</a></p> */}
                {/* <textarea value={task}></textarea> */}
            </form>
        </div>
    );
}
const Task = ({ task, title }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        addTask(this.nameInputRef.value);
    }
    return (
        <li>
            <form onSubmit={onSubmit}>
                <div className="taskContainer">
                    <h4>{title}</h4>
                    <textarea value={task} ref={(e) => this.nameInputRef = e}></textarea>
                    <button id="btnAdd">Add Task</button>
                </div>
            </form>
        </li>

    );
}
const Board = ({ cards }) => {


    const UserTask = cards.map((taskUser, index) => {
        return (
            <Task
                key={index}
                task={taskUser.task}
                title={taskUser.title}
            />
        );
    });
    return (
        <div>
            <Header />
            <div className="contenedor" id="contenedorGeneral">
                <Col md={2}>
                    <div className="divTask">
                        <ul>
                            {UserTask}
                        </ul>
                    </div>
                </Col>
                <Col md={2}>
                    <div id="cajitas" className="d-inlineblock">
                        <button id="btnAddList" onClick={(e) => { addTask(e) }}>Add List ...</button>
                    </div>
                    <div className="divTask d-inlineblock">
                        <TaskAdd />
                    </div>
                </Col>

            </div>
        </div>
    );
}

const mapToProps = ({ cards }) => ({ cards });
export default connect(mapToProps)(Board);