package com.freeway.web.serviceimpl.business;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freeway.web.mappers.business.MDBadCardMapper;
import com.freeway.web.messages.FeedBackMessage;
import com.freeway.web.models.BadCard;
import com.freeway.web.services.business.IMDBadCardService;

/**
 * @author FXStudio.Ajaxfan
 */
@Service
public class MDBadCardService implements IMDBadCardService {
	private @Autowired MDBadCardMapper mDBadCardMapper;

	/**
	 * @param t
	 * @return
	 */
	@Override
	public FeedBackMessage add(BadCard badCard) {
		badCard.setRecordNo(UUID.randomUUID().toString().replaceAll("-", ""));
		mDBadCardMapper.insertSelective(badCard);

		return new FeedBackMessage(true);
	}
}
