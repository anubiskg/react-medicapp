#include <math.h>
#include "mpi.h" // Biblioteca de MPI
#include <stdio.h>
int main(int argc, char *argv[])
{
 int n, // Numero de iteraciones
 rank, // Identificador de proceso
 size; // Numero de procesos
 double PI25DT = 3.141592653589793238462643;
 double mypi, pi, h,  sum;
 MPI_Init(&argc, &argv); // Inicializamos los procesos
 MPI_Comm_size(MPI_COMM_WORLD, &size); // Obtenemos el numero total de procesos
 MPI_Comm_rank(MPI_COMM_WORLD, &rank); // Obtenemos el valor de nuestro identificador
 printf("Rank = %d", rank);
 printf("Total = %d", size);
 // Solo el proceso 0 va a conocer el numero de iteraciones que vamos a
 // ejecutar para la aproximacion de PI
 if (rank == 0) {
    n=atoi( argv[1] );
 }
 // El proceso 0 reparte al resto de procesos el numero de iteraciones que calcularemos para la
 //aproximacion de PI
 MPI_Bcast(&n, // Puntero al dato que vamos a enviar
 1, // Numero de datos a los que apunta el puntero
 MPI_INT, // Tipo del dato a enviar
 0, // Identificacion del proceso que envia el dato
 MPI_COMM_WORLD);
 if (n <= 0){
    MPI_Finalize();
 }else {
 // Calculo de PI
    h = 1.0 / (double) n;
    sum = 0.0;
    int i= rank+1;
    while(i<=n) {
        double x = h * ((double)i - 0.5);
        sum += (4.0 / (1.0 + x*x));
        i+=size;
    }
    mypi = h * sum;
    printf("rank %d h= %f \n", rank, mypi);
    // Todos los procesos ahora comparten su valor local de PI,
    MPI_Reduce(&mypi, &pi, 1,  MPI_DOUBLE, MPI_SUM, 0, MPI_COMM_WORLD);
    // Solo el proceso 0 imprime el mensaje, ya que es la unica que
    // conoce el valor de PI aproximado.
    if (rank == 0){
        printf("El valor aproximado de PI es: %f", pi);
        printf(", con un error de %f \n",pi - PI25DT);
    }
 }
 }