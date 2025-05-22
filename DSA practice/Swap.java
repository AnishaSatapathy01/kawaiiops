 class Swap {
    public static void main (String args[]){
        int a = 10;
        int b= 20;
        int t;
        t=a;//alternate way a=a+b; b=a-b; a=a-b;
              
        a=b;
        b=t;
        System.out.println("a:"+a);
        System.out.println("b:"+b);
    }
 }