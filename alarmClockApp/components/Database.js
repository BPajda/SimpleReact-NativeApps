import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("../Pajda_Bartosz_4ic1.db"); // proszę o taki schemat nazywania swojej bazy danych, zwłaszcza podczas testów na telefonach w pracownikopiuj

export default class Database extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static createTable() {
        db.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS alarm (id integer primary key not null, hour text, minutes text);"
            );
        });
    }
    static add() {

        db.transaction(
            tx => {
                tx.executeSql("INSERT INTO alarm (hour, minutes) values ('00', '00')");
            })


    }
    static getAll() {
        var query = "SELECT * FROM alarm";
        //
        return new Promise((resolve, reject) => db.transaction((tx) => {
            tx.executeSql(query, [], (tx, results) => {

                console.log(JSON.stringify(results))

                resolve(JSON.stringify(results));

            }, function (tx, error) {

                reject(error);

            });
        }))
    }
    static remove(id) {
        db.transaction(tx => {
            tx.executeSql(
                `DELETE FROM alarm WHERE (id = ${id});`
            );
        });

    }
    static removeAll() {

        db.transaction(tx => {
            tx.executeSql(
                "DELETE FROM alarm ;"
            );
        });
    }
}
