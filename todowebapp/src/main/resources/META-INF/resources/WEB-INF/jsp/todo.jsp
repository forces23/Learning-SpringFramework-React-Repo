<%@ include file="common/header.jspf" %>
<%@ include file="common/navigation.jspf"%>
<div class="Container">
	<h1>Enter Todo Details :</h1>
	<form:form method="post" modelAttribute="todo">
		<fieldset class="mb-3">
			<form:label path="description">Description: </form:label>
			<form:input type="text" path="description" required="required" />
			<form:errors type="text" path="description" cssClass="text-warning" />
		</fieldset>

		<!--### Add a text field for a comment / description to give more details about the todo ###-->

		<fieldset class="mb-3">
			<form:label path="targetDate">Target Date: </form:label>
			<form:input type="text" path="targetDate" id="targetDate" />
			<form:errors type="text" path="targetDate" cssClass="text-warning" />
		</fieldset>
		<!-- 
		<fieldset class="mb-3">
			<form:label path="done">is Done: </form:label>
			<form:input type="text" path="done" />
			<form:errors type="text" path="done" cssClass="text-warning"/> 
		</fieldset>
	-->

		<form:input type="hidden" name="done" path="done" />
		<form:input type="hidden" name="id" path="id" />

		<input type="submit" value="Submit" class="btn btn-success" />
	</form:form>
</div>
<%@ include file="common/footer.jspf" %>
<script type="text/javascript">
	$('#targetDate').datepicker({
		format : 'yyyy-mm-dd'
	});
</script>


