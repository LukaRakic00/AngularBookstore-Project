package com.rakic.testlab.example02;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import java.util.Arrays;
import java.util.Collection;

@RunWith(Parameterized.class)
public class WordConcatenatorTest {

    private String word1 ;
    private String word2 ;
    private String expectedResult;

    public WordConcatenatorTest(String word1, String word2, String expectedResult) {
        this.word1 = word1;
        this.word2 = word2;
        this.expectedResult = expectedResult;
    }

    @Parameterized.Parameters
    public static Collection  addConcatenateWords() {
        return Arrays.asList(new Object[][] {
            {"Hello", "World", "HelloWorld"},
            {"Luka", "Rakic", "LukaRakic"},
            {"Pera", "Peric", "PeraPeric"},
            {"Nikola", "Nikolic", "NikolaNikolic"}
        });
    }

    @Test
    public void testAdd() {
        String actual = WordConcatenator.concatenateWords(word1, word2);
        System.out.println(word1 + " " + word2 + " = " + actual);
        Assert.assertEquals(expectedResult, actual);
    }

}
