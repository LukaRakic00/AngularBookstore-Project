/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rakic.testlab.example02;

public class Theatre {
    
    public enum Status {NORMAL, BENEFICIAL}

    // Метод враћа израчунати проценат попуста.
    // Ако је број наручених карата мањи од 5, попуст се не даје (0%).
    // Уколико је број наручених карата већи или једнак 5, а мањи од 10, даје се 10% попуста.
    // Ако је број карата 10 или више, попуст је 20%.
    // Ако је унет недозвољен број (негативан број), метода треба да избаци изузетак IllegalArgumentException.
    // Морате да:
    //      a) Дефинишите класе еквиваленције и напишите тестове са репрезентативним вредностима
    //      b) Дефинишите вредности граница и напишите тестове за све вредности граница
    public static int groupTicketOrder (int numTickets) throws IllegalArgumentException{
        if (numTickets < 0) throw new IllegalArgumentException();
        int discount = 0;
        if (numTickets >= 5 && numTickets < 10) 
            discount = 10;

        // greska BV10: treba numTickets >= 10
        else if (numTickets > 10)
            discount = 20;
        
        return discount;
    }
    
    // Метод calculateTicektPrice() –
    // основна цена улазнице је 1000 динара. Ова метода узима као параметре старост купца,
    // боолеан ако купац има ваучер и посебан статус купца (могуће вредности NORMAL или BENEFICIAL).
    // Претпостављамо да ће старост бити унета исправно (не очекујемо негативну вредност).
    // Карта се затим формира коришћењем датих параметара дефинисаних у табели испод.
    // Потребно је написати следеће тестове који ће гарантовати:
    // a. 100% statement coverage
    // b. 100% decision coverage
    // c. 100% path coverage
    public double calculateTicketPrice (int age, boolean hasVoucher, Status status){
        double price = 1000;
        if (age <= 18) {
            price -= 400;

            if (status == Status.BENEFICIAL){
                price -= 100;
            }

        } else if (age > 18 && age <= 65) {
            
            if (status == Status.BENEFICIAL){
                price -= 200;
            }

        } else {
            price -= 300;
        }

        if (hasVoucher) {
            price *= 0.5;
        }
        return price;
    }
    
    
    
    
}
