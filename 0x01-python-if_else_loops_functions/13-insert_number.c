#include "lists.h"
#include <stddef.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/**
* insert_node - adds a new node at the end of a linked list
* @head: a pointer to the pointer to the head of the linked list
* @str: the string to be duplicated and stored in the new node
* Return: the address of the new element, or NULL if it failed
*/
listint_t *insert_node(listint_t **head, int number)
{
listint_t *new_node = malloc(sizeof(listint_t));
listint_t *h = *head;

if (new_node == NULL)
return (NULL);
new_node->n = number;
if (new_node->next == NULL)
{
free(new_node);
return (NULL);
}
new_node->next = NULL;
if (*head == NULL)
*head = new_node;
else
{
while (h->next != NULL)
h = h->next;
h->next = new_node;
}

return (new_node);
}
