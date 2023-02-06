int sum(n)
{
//int s=0;
if(n==0)
return 0;
else

return(n%10)+sum(n/10);
}
void main()
{
int n;
printf ("enter the number");
scanf("%d",&n);
printf("%d\n",sum(n));
getch();
}

