#include "lists.h"

/**
* check_cycle - This finds the loop in a linked list
* @list: linked list to search for
* Return: The address of the node where the loop starts, or NULL
*/


int check_cycle(listint_t *list)
{
listint_t *slow = list;
listint_t *quick = list;

if (!list)
return (0);
while (slow && quick && quick->next)
{
quick = quick->next->next;
slow = slow->next;
if (quick == slow)
{
slow = list;
while (slow != quick)
{
slow = slow->next;
quick = quick->next;
}
}
}
if (quick != NULL)
return (1);
return (0);
}
