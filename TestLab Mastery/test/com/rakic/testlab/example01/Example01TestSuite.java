package com.rakic.testlab.example01;


import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)
@Suite.SuiteClasses({
        AircraftTest.class,
        BusPlusTest.class,
        MathUtilsTest.class,
})
public class Example01TestSuite {


}
