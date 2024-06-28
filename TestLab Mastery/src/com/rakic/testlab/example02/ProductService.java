/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rakic.testlab.example02;


/*
* У класи ProductService, потребно је тестирати две методе, findProduct
* (који ће претражити базу података и вратити производ који одговара ИД-у претраге у облику објекта Movie),
* и countProducts (који ће вратити целобројну вредност која представља количину филмова у бази података).
* ProductDatabase класа још увек није спроведена. Направите све неопходне ставке да бисте могли да креирате
* тестове. Предлог – користити JMock радни оквир.
*
* */
public class ProductService {
    
    private ProductDatabase database;
    
    public ProductService() {
    
    }
    
    public void setProductDatabase(ProductDatabase database){
        this.database = database;
    }
    
    public Product findProduct(int id){
        return database.findProduct(id);
    }
    
    public int countProduct(){
        return database.countAll();
    }
    
}
