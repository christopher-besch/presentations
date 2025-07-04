#define _GNU_SOURCE
#include <printf.h>
#include <pthread.h>
#include <sched.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

void pin_to_cpu(int cpu)
{
    cpu_set_t cpuset;
    CPU_ZERO(&cpuset);
    CPU_SET(cpu, &cpuset);
    pthread_setaffinity_np(pthread_self(), sizeof(cpu_set_t), &cpuset);
}

void* low_prio_thread(void* arg)
{
    pin_to_cpu(0);
    printf("low_prio: started\n");

    for(volatile long i = 0; i < 1e10; ++i)
        ;

    printf("low_prio: finished\n");
    return NULL;
}

void* high_prio_thread(void* arg)
{
    pin_to_cpu(0);
    // ensure low prio thread has started
    sleep(1);
    printf("hig_prio: started\n");

    for(volatile long i = 0; i < 1e10; ++i)
        ;

    printf("hig_prio: finished\n");
    return NULL;
}

int main()
{
    // initialize threads
    pthread_t      low, high;
    pthread_attr_t attr;
    pthread_attr_init(&attr);

    pthread_create(&low, &attr, low_prio_thread, NULL);
    pthread_create(&high, &attr, high_prio_thread, NULL);

    // cleanup
    pthread_join(low, NULL);
    pthread_join(high, NULL);
    pthread_attr_destroy(&attr);
    return 0;
}
