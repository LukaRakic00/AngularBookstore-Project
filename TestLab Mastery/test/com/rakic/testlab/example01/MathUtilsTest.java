package com.rakic.testlab.example01;

import com.rakic.testlab.example01.MathUtils;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import java.util.Arrays;
import java.util.Collection;

@RunWith(Parameterized.class)
public class MathUtilsTest {

    private int inputNumberA;
    private int inputNumberB;
    private int expectedResult;

    public MathUtilsTest(int inputNumberA, int inputNumberB, int expectedResult) {
        this.inputNumberA = inputNumberA;
        this.inputNumberB = inputNumberB;
        this.expectedResult = expectedResult;
    }

    @Parameterized.Parameters
    public static Collection addFunctionData() {
        return Arrays.asList(new Object[][] {
            {1, 1, 2},
            {2, 2, 4},
            {-1, 10, 9},
            {15, 12, 27}
        });
    }

    @Test
    public void testAdd() {
        int actual = MathUtils.add(inputNumberA, inputNumberB);

        System.out.println(inputNumberA + " + " + inputNumberB + " = " + actual);
        Assert.assertEquals(expectedResult, actual);
    }

}
