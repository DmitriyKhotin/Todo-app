<template>
	<!--TodoList используется в цикле, но показать Todo надо лишь для той, у которой show=true-->
	<div v-if="item.show">
		<div v-if="item.list[0]">
			<div v-for="todo in item.list" :key="todo.id" >
				<TodoItem  v-if="todo.id < 14" :todo="todo" :id="todo.id" :noteId="item.id" />
				<hr v-if="todo.id < 14">
			</div>
		</div>
		<p v-else>Список пуст</p>
		<div v-if="item.list.length > 13">
				<span>...</span>
		</div>
	</div>
</template>

<script>
	import TodoItem from "./TodoItem";
	export default {
		props: ['item'],
		components: {
			TodoItem
		}
	}
</script>

<style scoped>
</style>