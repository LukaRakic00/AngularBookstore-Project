package com.rakic.testlab.example01;

import com.rakic.testlab.example01.BusPlus;
import org.junit.Assert;
import org.junit.Test;

public class BusPlusTest {

    // Legalna klasa 1 (LEC1)
    @Test
    public void testCalculateDiscountForPayingMultipleMonthsInAdvanceLEC1() {
        int numMonths = 1;
        double expectedResult = 0.0;

        double result = BusPlus.calculateDiscountForPayingMultipleMonthsInAdvance(numMonths);

        Assert.assertEquals(expectedResult, result, 8.0);
    }

    @Test
    public void testCalculateDiscountForPayingMultipleMonthsInAdvanceLEC2() {
        int numMonths = 4;
        double expectedResult = 5.0;

        double result = BusPlus.calculateDiscountForPayingMultipleMonthsInAdvance(numMonths);

        Assert.assertEquals(expectedResult, result, 8.0);
    }

    @Test
    public void testCalculateDiscountForPayingMultipleMonthsInAdvanceLEC3() {
        int numMonths = 7;
        double expectedResult = 10.0;

        double result = BusPlus.calculateDiscountForPayingMultipleMonthsInAdvance(numMonths);

        Assert.assertEquals(expectedResult, result, 8.0);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testCalculateDiscountForPayingMultipleMonthsInAdvanceIC1() {
        int numMonths  = -5;
        BusPlus.calculateDiscountForPayingMultipleMonthsInAdvance(numMonths);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testCalculateDiscountForPayingMultipleMonthsInAdvanceIC2() {
        int numMonths  = 13;
        BusPlus.calculateDiscountForPayingMultipleMonthsInAdvance(numMonths);
    }


    @Test(expected = IllegalArgumentException.class)
    public void testCalculateDiscountForPayingMultipleMonthsInAdvanceBVMinus1() {
        int numMonths = -1;
        BusPlus.calculateDiscountForPayingMultipleMonthsInAdvance(numMonths);
    }

    @Test
    public void calculateDiscountForPayingMultipleMonthsInAdvanceTestBV0() {
        int numMonths  = 0;
        double expectedResult = 0;
        double result = BusPlus.calculateDiscountForPayingMultipleMonthsInAdvance(numMonths);
        Assert.assertEquals(expectedResult, result, 0.0);
    }

    // vec je testirano u LEC1
    @Test
    public void calculateDiscountForPayingMultipleMonthsInAdvanceTestBV1() {
        int numMonths  = 1;
        double expectedResult = 0;
        double result = BusPlus.calculateDiscountForPayingMultipleMonthsInAdvance(numMonths);
        Assert.assertEquals(expectedResult, result, 0.0);
    }

    @Test
    public void calculateDiscountForPayingMultipleMonthsInAdvanceTestBV2() {
        int numMonths  = 2;
        double expectedResult = 0;
        double result = BusPlus.calculateDiscountForPayingMultipleMonthsInAdvance(numMonths);
        Assert.assertEquals(expectedResult, result, 0.0);
    }

    // greska, treba da bude po dokumentaciji za mesec >= 3 discount 5
    @Test
    public void calculateDiscountForPayingMultipleMonthsInAdvanceTestBV3() {
        int numMonths  = 3;
        double expectedResult = 5;
        double result = BusPlus.calculateDiscountForPayingMultipleMonthsInAdvance(numMonths);
        Assert.assertEquals(expectedResult, result, 0.0);
    }

    @Test
    public void calculateDiscountForPayingMultipleMonthsInAdvanceTestBV4() {
        int numMonths  = 4;
        double expectedResult = 5;
        double result = BusPlus.calculateDiscountForPayingMultipleMonthsInAdvance(numMonths);
        Assert.assertEquals(expectedResult, result, 0.0);
    }

    @Test
    public void calculateDiscountForPayingMultipleMonthsInAdvanceTestBV5() {
        int numMonths  = 5;
        double expectedResult = 5;
        double result = BusPlus.calculateDiscountForPayingMultipleMonthsInAdvance(numMonths);
        Assert.assertEquals(expectedResult, result, 0.0);
    }

    // greska!! u dokumentaciji pise da ako je mesec veci ili jednak od 6, discount je 10%
    @Test
    public void calculateDiscountForPayingMultipleMonthsInAdvanceTestBV6() {
        int numMonths  = 6;
        double expectedResult = 10;
        double result = BusPlus.calculateDiscountForPayingMultipleMonthsInAdvance(numMonths);
        Assert.assertEquals(expectedResult, result, 0.0);
    }


    @Test
    public void calculateDiscountForPayingMultipleMonthsInAdvanceTestBV7() {
        int numMonths  = 7;
        double expectedResult = 10;
        double result = BusPlus.calculateDiscountForPayingMultipleMonthsInAdvance(numMonths);
        Assert.assertEquals(expectedResult, result, 0.0);
    }

    @Test
    public void calculateDiscountForPayingMultipleMonthsInAdvanceTestBV8() {
        int numMonths  = 11;
        double expectedResult = 10;
        double result = BusPlus.calculateDiscountForPayingMultipleMonthsInAdvance(numMonths);
        Assert.assertEquals(expectedResult, result, 0.0);
    }

    // ovde je greska jer u dokumentaciji pise da mesec bude veci od 12, znaci > 12 ne >= 12
    @Test
    public void calculateDiscountForPayingMultipleMonthsInAdvanceTestBV9() {
        int numMonths  = 12;
        double expectedResult = 10;
        double result = BusPlus.calculateDiscountForPayingMultipleMonthsInAdvance(numMonths);
        Assert.assertEquals(expectedResult, result, 0.0);
    }

    @Test(expected = IllegalArgumentException.class)
    public void calculateDiscountForPayingMultipleMonthsInAdvanceTestBV10() {
        int numMonths  = 13;
        double expectedResult = 10;
        BusPlus.calculateDiscountForPayingMultipleMonthsInAdvance(numMonths);
    }


    // odavde sam ja radioo
    // po meni ne moze da se pokrije SC1 jer ne moze pol da bude zensko i status trudna i da bude zensko i nezaposlena
    // iz ovog razloga ne mogu da pokrijem SC1 treba
    @Test
    public void testCalculateBusPlusSC1() {
        BusPlus.Status status = BusPlus.Status.STUDENT;
        double expectedPrice = 3200 * 0.3;
        boolean specialNeeds = false;
        double actual = BusPlus.calculateBusPlus(60, status, BusPlus.Gender.FEMALE, specialNeeds);
        Assert.assertEquals(expectedPrice, actual, 0.5);
    }

    @Test
    public void testCalculateBusPlusSC2() {
        BusPlus.Status status = BusPlus.Status.PREGNANT;
        BusPlus.Gender gender = BusPlus.Gender.FEMALE;
        double expectedPrice = 3200 * 0.1;
        boolean specialNeeds = false;
        double actual = BusPlus.calculateBusPlus(60, status, gender, specialNeeds);
        Assert.assertEquals(expectedPrice, actual, 0.5);
    }

    @Test
    public void testCalculateBusPlusSC3() {
        BusPlus.Status status = BusPlus.Status.PREGNANT;
        BusPlus.Gender gender = BusPlus.Gender.FEMALE;
        double expectedPrice = 0;
        boolean specialNeeds = true;
        double actual = BusPlus.calculateBusPlus(60, status, gender, specialNeeds);
        Assert.assertEquals(expectedPrice, actual, 0.5);
    }

    @Test
    public void testCalculateBusPlusSC4() {
        BusPlus.Status status = BusPlus.Status.PREGNANT;
        BusPlus.Gender gender = BusPlus.Gender.FEMALE;
        double expectedPrice = 0;
        boolean specialNeeds = true;
        double actual = BusPlus.calculateBusPlus(70, status, gender, specialNeeds);
        Assert.assertEquals(expectedPrice, actual, 0.5);
    }
}
