package com.rakic.testlab.example02;

public interface ProductDatabase {
    Product findProduct(int id);

    int countAll();
}
