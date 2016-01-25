package com.freeway.web.services.abstras.add;

import com.freeway.web.messages.FeedBackMessage;

/**
 * @author FXStudio.Ajaxfan
 */
public interface IAdd<T> {
	public FeedBackMessage add(T t);
}
