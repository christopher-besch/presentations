all: normal_scheduling_out.txt rt_scheduling_out.txt priority_inversion_out.txt priority_inheritance_out.txt

clean:
	rm -fv normal_scheduling rt_scheduling priority_inversion priority_inheritance
	rm -fv normal_scheduling_out.txt rt_scheduling_out.txt priority_inversion_out.txt priority_inheritance_out.txt

normal_scheduling_out.txt: normal_scheduling
	sudo ./normal_scheduling | tee normal_scheduling_out.txt

rt_scheduling_out.txt: rt_scheduling
	sudo ./rt_scheduling | tee rt_scheduling_out.txt

priority_inversion_out.txt: priority_inversion
	sudo ./priority_inversion | tee priority_inversion_out.txt

priority_inheritance_out.txt: priority_inheritance
	sudo ./priority_inheritance | tee priority_inheritance_out.txt

normal_scheduling: normal_scheduling.c
	gcc -o normal_scheduling normal_scheduling.c

rt_scheduling: rt_scheduling.c
	gcc -o rt_scheduling rt_scheduling.c

priority_inversion: priority_inversion.c
	gcc -o priority_inversion priority_inversion.c

priority_inheritance: priority_inheritance.c
	gcc -o priority_inheritance priority_inheritance.c
