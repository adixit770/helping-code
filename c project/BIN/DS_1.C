#include<stdio.h>
struct std
{
int a;
struct std*next;
};
struct std*p1;
struct std*p2;
struct std*p3;
struct std*p4,*t;

void main()
{

clrscr();
p1=(struct std*)malloc(sizeof(struct std));
puts("enter number");
scanf("%d",&p1->a);

p2=(struct std*)malloc(sizeof(struct std));
puts("enter number");
scanf("%d",&p2->a);

p3=(struct std*)malloc(sizeof(struct std));
puts("enter number");
scanf("%d",&p3->a);

p4=(struct std*)malloc(sizeof(struct std));
puts("enter number");
scanf("%d",&p4->a);

p1->next = p2;
p2->next = p3;
p3->next = p4;
p4->next = NULL;

printf("%u %u %u %u",p1->a,p2->a,p3->a,p4->a);
t=p1;
while(t!=NULL){
printf("\n%d",t->a);
t=t->next;

}


getch();

}