/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rakic.testlab.example01;

public class BusPlus {
    
    public enum Status {UNEMPLOYED, EMPLOYED, STUDENT, PREGNANT}
    public enum Gender {MALE, FEMALE}
    
    //numMonths is less than 3, there is no discount
    //If numMonths is greater or equal than 3, and less than 6, there is 5% discount
    //If numMonths is 6 or more, we give 10%. 
    //Max numb of months 12
    //If illegal number of months has been entered (negative or over 12), exception IllegalArgumentException is thrown
    public static double calculateDiscountForPayingMultipleMonthsInAdvance (int numMonths) throws IllegalArgumentException {

        // BV9: greska, treba numMonths > 12
        if (numMonths < 0 || numMonths >= 12) throw new IllegalArgumentException();
        int discount = 0;

        // BV3: greska, treba numMonts >= 3
        if (numMonths > 3 && numMonths < 6)
            discount = 5;

        // BV6: greska, treba numMonths >= 6
        else if (numMonths > 6)
            discount = 10;
        return discount;
    }

    public static double calculateBusPlus (int age, Status status, Gender gender, boolean specialNeeds){
        double price = 3200;
        if (status != status.EMPLOYED) {
            if (age > 65 || (gender == Gender.MALE && status == Status.UNEMPLOYED)){
                price *= 0.5;
            } else if (status == Status.STUDENT || (gender == Gender.FEMALE && status == Status.UNEMPLOYED)) {
                price *= 0.3;
            }
            
            if (gender == Gender.FEMALE && status == Status.PREGNANT ) {
                price *= 0.1; //there is an error here
            }
        }
        
        if (specialNeeds) {
            price = 0;
        }    
        return price;
    }
    
}
