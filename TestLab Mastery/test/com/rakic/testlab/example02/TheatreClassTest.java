package com.rakic.testlab.example02;

import org.junit.Assert;
import org.junit.Test;

public class TheatreClassTest {

    // LEC - legalna klasa
    // IEC - nelegalna klasa

    // 1. a) imamo 3 legalne klase ekvivalencije i 1 nelegalnu

    @Test
    public void testGroupTicketOrderLEC1() {
        int numTickets = 3;
        int expectedResult = 0;
        int actualResult = Theatre.groupTicketOrder(numTickets);
        Assert.assertEquals(expectedResult, actualResult);
    }

    @Test
    public void testGroupTicketOrderLEC2() {
        int numTickets = 7;
        int expectedResult = 10;
        int actualResult = Theatre.groupTicketOrder(numTickets);
        Assert.assertEquals(expectedResult, actualResult);
    }

    @Test
    public void testGroupTicketOrderLEC3() {
        int numTickets = 15;
        int expectedResult = 20;
        int actualResult = Theatre.groupTicketOrder(numTickets);
        Assert.assertEquals(expectedResult, actualResult);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testGroupTicketOrderIEC1() {
        int numTickets = -5;
        Theatre.groupTicketOrder(numTickets);
    }

    // 1. b) BV - granicne vrednosti

    @Test(expected = IllegalArgumentException.class)
    public void testGroupTicketOrderBVminus1() {
        int numTickets = -1;
        Theatre.groupTicketOrder(numTickets);
    }

    @Test
    public void testGroupTicketOrderBV0() {
        int numTickets = 0;
        int expectedResult = 0;
        int actualResult = Theatre.groupTicketOrder(numTickets);
        Assert.assertEquals(expectedResult, actualResult);
    }

    @Test
    public void testGroupTicketOrderBV1() {
        int numTickets = 1;
        int expectedResult = 0;
        int actualResult = Theatre.groupTicketOrder(numTickets);
        Assert.assertEquals(expectedResult, actualResult);
    }

    @Test
    public void testGroupTicketOrderBV4() {
        int numTickets = 4;
        int expectedResult = 0;
        int actualResult = Theatre.groupTicketOrder(numTickets);
        Assert.assertEquals(expectedResult, actualResult);
    }

    @Test
    public void testGroupTicketOrderBV5() {
        int numTickets = 5;
        int expectedResult = 10;
        int actualResult = Theatre.groupTicketOrder(numTickets);
        Assert.assertEquals(expectedResult, actualResult);
    }

    @Test
    public void testGroupTicketOrderBV6() {
        int numTickets = 6;
        int expectedResult = 10;
        int actualResult = Theatre.groupTicketOrder(numTickets);
        Assert.assertEquals(expectedResult, actualResult);
    }

    @Test
    public void testGroupTicketOrderBV9() {
        int numTickets = 9;
        int expectedResult = 10;
        int actualResult = Theatre.groupTicketOrder(numTickets);
        Assert.assertEquals(expectedResult, actualResult);
    }

    // greska, po dokumentaciji treba broj karata >= 10 da bude discount 20
    @Test
    public void testGroupTicketOrderBV10() {
        int numTickets = 10;
        int expectedResult = 20;
        int actualResult = Theatre.groupTicketOrder(numTickets);
        Assert.assertEquals(expectedResult, actualResult);
    }

    @Test
    public void testGroupTicketOrderBV11() {
        int numTickets = 11;
        int expectedResult = 20;
        int actualResult = Theatre.groupTicketOrder(numTickets);
        Assert.assertEquals(expectedResult, actualResult);
    }

    // sto se tice brojeva karata >=10 (npr. 15, 20...) testirano je kroz LEC3()
    // sto se tice brojeva karata <0 (npr. -5, -10...) testirano je kroz IEC1()
    // sto se tice poslednjeg else if (numTickets > 10), testirano je kroz BV9(), BV10(), BV11()

}
