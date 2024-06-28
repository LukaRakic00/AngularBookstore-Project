/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rakic.testlab.example02;

/*
Параметризовани тест – класа WordConcatenator има једну методу, concatenateWords(),
који узима два стринга као улазе, спаја их и враћа спојени стринг као резултат
(пример, позив са низовима „Hello“ и „World“ ће вратити „HelloWorld“).
Направите параметризовани тест за овај метод.
*/

public class WordConcatenator {
    public static String concatenateWords(String word1, String word2){
        String result = word1 + word2;
        return result;
    }
    
}
