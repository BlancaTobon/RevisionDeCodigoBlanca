package.com.generation;

import.java.util.Scanner;

public class Codigo4 {

/*Se agrego el metodo main*/
    public static void main(String [] args) {
/*Se agrego System.in*/
        Scanner s = new Scanner(System.in);
        
        System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
        String j1 = s.nextLine();
        
        System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
        String j2 = s.nextLine();
        /*Se agrego .equals y se puso breack para cerrr los casos*/
        if (j1.equals(j2)) {
            System.out.println("Empate");
        } else {
            int g = 2;
            switch(j1) {
                case "piedra":
                    if (j2.equals("tijeras")) {
                        g = 1;
                    }
                    break;
                    
                case "papel":
                    if (j2.equals("piedra")) {
                        g = 1;
                    }
                    break;
                    
                case "tijera":
                    if (j2.equals("papel")) {
                        g = 1;
                    }
                    break;
                    
                default:
                    break;
            }
            System.out.println("Gana el jugador " + g);
        }
    }
}