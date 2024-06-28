/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rakic.testlab.example01;

public class Aircraft {
    
    private String name;
    private int passengers;
    private IEngine engine;

    public Aircraft(String name, int passengers, IEngine engine) {
        this.name = name;
        this.passengers = passengers;
        this.engine = engine;
    }
    
    public double calculateTripFuelRequired (int trip){
        return (engine.calculateConsumption() / 100) * trip;
    }
    
}
