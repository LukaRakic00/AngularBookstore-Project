/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rakic.testlab.example02;

public class Product {
    
    private int id;
    private String productName;
    private String productManufacturer;

    public Product(int id, String productName, String productManufacturer) {
        this.id = id;
        this.productName = productName;
        this.productManufacturer = productManufacturer;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductManufacturer() {
        return productManufacturer;
    }

    public void setProductManufacturer(String productManufacturer) {
        this.productManufacturer = productManufacturer;
    }

    @Override
    public String toString() {
        return "Product{" + "id=" + id + ", productName=" + productName + ", productManufacturer=" + productManufacturer + '}';
    }
}
