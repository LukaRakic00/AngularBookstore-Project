package com.rakic.testlab.example02;

import org.jmock.Expectations;
import org.jmock.integration.junit4.JUnitRuleMockery;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;

public class ProductServiceTest {

    @Rule
    public JUnitRuleMockery context = new JUnitRuleMockery();
    private ProductDatabase db;
    private ProductService service;

    @Before
    public void setUp() {
        db = context.mock(ProductDatabase.class);
        service = new ProductService();
        service.setProductDatabase(db);
    }
    @Test
    public void testFindProduct(){

        Product product = new Product(1, "stolica", "Forma Ideale");
        context.checking(new Expectations(){{
            oneOf(db).findProduct(1);
            will(returnValue(product));
        }});
        Product res = service.findProduct(1);
        Assert.assertEquals(product, res);
    }

    @Test
    public void testCountProducts() {
        int count = 5;
        context.checking(new Expectations(){{
            oneOf(db).countAll();
            will(returnValue(5));
        }});

        int res = service.countProduct();
        Assert.assertEquals(res, count);
    }


}
